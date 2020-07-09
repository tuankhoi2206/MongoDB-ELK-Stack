use LearningNoSQL

cursor = db.Account.find()
while (cursor.hasNext()) {
    var doc = cursor.next();
    doc = process(doc);

}
db.Account.find()._addSpecial("$maxscan", 10)


//Index
db.uses.find({"username": "user48"}).explain().millis
db.uses.find({"username": "user48"}).hint({"$natural":1}).explain()
db.uses.find()
db.uses.aggregate({ "$project": {"username": 1}})

