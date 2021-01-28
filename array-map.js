var students = [
	{
		name: "Khanh Qui",
		age: 20,
	},
	{
		name: "Khanh Qui Pro",
		age: 20,
	},
	{
		name: "Khanh Qui Vip",
		age: 20,
	}
];

function customName(student){
	return {
		name: `Vo ${student.name}`,
		age: student.age
	};
};

var newStudents = students.map(customName);

console.log(newStudents);