import Router from 'express'
import Country from '../models/country.js'
import countryInfo from '../models/countryInfo.js'

const router = Router()

router.get('/', async (req, res) => {
    try {
         await Country.aggregate([{
            $lookup: {
                from: "overal_students_by_countries",
                localField: "country",
                foreignField: "country",
                as: "studentsByCountry"
            }
        },
        {
            $unwind: '$studentsByCountry'
        },
        {
            $group: {
                _id: "$country",
                allDiffs: {
                    $push: {
                        $subtract: ["$studentsByCountry.overallStudents", {
                            $sum: {
                                $size: "$students"
                            }
                        }]
                    }
                },
                count: {
                    "$sum": 1
                },
                longitude: {
                    $push: {
                        $arrayElemAt: ["$location.ll", 0]
                    }
                },
                latitude: {
                    $push: {
                        $arrayElemAt: ["$location.ll", 1]
                    }
                }
            }
        }, 
        { $sort: { _id: -1 } },
        { $out: "info_of_countries" }
        ])

        const data = await countryInfo.find()
        
        res.status(200).json(data)

    } catch (error) {
        res.status(500).json({
            message: error
        })
    }
})

export default router