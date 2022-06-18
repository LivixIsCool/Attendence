name_of_the_student_array = []
function submit () {
    name1 = document.getElementById("name_of_the_student_1").value;
    name2 = document.getElementById("name_of_the_student_2").value;
    name3 = document.getElementById("name_of_the_student_3").value;
    name4 = document.getElementById("name_of_the_student_4").value;
    name_of_the_student_array.push(name1);
    name_of_the_student_array.push(name2);
    name_of_the_student_array.push(name3);
    name_of_the_student_array.push(name4);
    console.log(name_of_the_student_array);
    document.getElementById("display_name").innerHTML = name_of_the_student_array ;
    document.getElementById("submit_button").style.display = "none" ;
    document.getElementById("sort_button").style.display = "inline-block" ;
}
function sorting () {
    name_of_the_student_array.sort();
    document.getElementById("display_name").innerHTML = name_of_the_student_array ;
}