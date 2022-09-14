const express = require('express');
const router = express.Router();
const Course = require('./course');

router.get("/", async(req,res)=> {
    try {
        const courses = await Course.find();
        /*res.send(courses);*/
        res.render('courses', {courses: courses});
        
    }catch(err) {
        return res.status(500).json({message: err.message});
    }
})

router.get('/AddCourse',(req,res)=> {
    res.render('addcourse');
  })
  

router.post("/AddCourse", async(req,res)=> {
    const newCourse = new Course({
        Course: req.body.Course,
        Time: req.body.Time,
        CourseCode: req.body.CourseCode,
        EnrolmentTime: req.body.EnrolmentTime,
        NumberOfCredits: req.body.NumberOfCredits
    })

    try {
        const courses = await newCourse.save();
        /*res.status(201).json({courses});*/
        res.redirect('/');
    }catch(err) {
        return res.status(500).json({message: err.message});
    }
    
})

router.delete("/courses",async(req,res) => {
    await Course.deleteOne({brand: req.body.CourseCode}).exec((err,result) => {
        if(err) {
            return res.status(500).json({message: err.message});
        }
        else {
            return res.status(200).json(result);
        }
    });
})

router.get('/EditCourse/:id',async(req,res)=> {
    const course= await Course.findById({_id: req.params.id});
        res.render('editcourse', {course: course}); 
  })

router.put("/EditCourse/:id", async(req,res) => {
    await Course.findOneAndUpdate({_id: req.params.id}, req.body, {new:true}).exec((err,result) => {
        if(err) {
            return res.status(500).json({message: err.message});
        }
        else {
            return res.status(200).json({result});
        }
    })
})

module.exports = router;
