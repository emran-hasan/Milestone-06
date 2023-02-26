class Instructor{
    name;
    designation= 'Web course instructor'
    team= 'web'
    location ;

    constructor(name, location){
        this.name = name;
        this.location = location;
    }
    startSupportSession(time){
        console.log(`Please support the session at ${time}`);
    }
    createModuleQuiz(module){
        console.log(`please create a Quiz ${module}`);
    }
}
const amir = new Instructor('Amir', 'Bangladesh')
console.log(amir);
amir.startSupportSession('9.00 pm');
amir.createModuleQuiz(32)