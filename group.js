db.getCollection("post").aggregate([
    {
        $project: { "_id": 0, title: "$title", tags: { $cond: [{ $isArray: "$tags" }, { $size: "$tags" }, 0] } }
    }
])

db.getCollection("post").aggregate([{
    $project: { "_id": 0, title: "$title", tags: { $cond: [{ $isArray: "$tags" }, { $size: "$tags" }, 0] } }
},
{
    $project: {
        sum: {$size: { $toInt("$title")}} }
    }
}
]);