var mongoose= require('mongoose');
var Elder = mongoose.model('Elder')

module.exports={
    index:function(req,res){
        Elder.find({}, function(err, elders){
            if(err){
                console.log(err)};
            res.json({elders:elders});
        })
    },

    new:function(req,res){
        var elders = new Elder ({name:req.params.name});
        elders.save(function(err){
            if (err){
                console.log('something went wrong');
            }
            res.redirect('/')
        })
    },

    show: function(req,res){
        Elder.findOne({name:req.params.name}, function(err, elders){
            if (err){console.log(err);}
            res.json('{elder}');
        })
    },

    delete: function(req, res){
        Elder.remove({name:req.params.name}, function(err, elders){
            if(err){ console.log(err);}
        })
        res.redirect('/')
    }
}
