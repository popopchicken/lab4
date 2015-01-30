exports.viewProject = function(req, res) {
	//controller code goes here
	var name = req.params.name;
	console.log("The project name is: " + name);

	//load file called 'project.handlebars' and display it
	res.render('project', {
		'projectName': name
	});
}