const Student = require('../models/Student')

class StudentController {

    index(req, res) {
        //list students
        Student.find({}, function (err, students) {
            if (err) {
                res.status(400).json({ error: 'ERROR' });
            }
            else {
                res.status(200).json(students)
            }
        })
    }

    showByName(req, res, next) {
        Student.find({ name: req.params.name })
            .then(students => {
                res.status(200).json({ students })
            })
            .catch(next)
    }

}

module.exports = new StudentController
