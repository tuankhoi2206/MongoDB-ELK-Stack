db.getCollection("weish_pubs").aggregate(

	// Pipeline
	[
		// Stage 1
		{
			$match: {
			    "name": /.*horse.*/i
			}
		},

		// Stage 2
		{
			$group: {
			    "_id": {
			        "local_authority" : "$local_authority"
			    },
			    "COUNT(*)": {
			        "$sum": NumberInt(1)
			    }
			}
		},

		// Stage 3
		{
			$project: {
			    "local_authority": "$_id.local_authority",
			    "amount" : "$COUNT(*)",
			    "_id" : NumberInt(0)
			}
		},

		// Stage 4
		{
			$sort: {
			    "amout": NumberInt(-1)
			}
		},

	]

	// Created with Studio 3T, the IDE for MongoDB - https://studio3t.com/

);
