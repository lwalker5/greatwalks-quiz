/*Script that handles quiz creation, user interactions, and the display of results*/

;(function(window, document, $j, undefined) {

    var QuizController = { 
 
        currStep: 0,
        questions: $j('.question'),
        steps: $j('.quiz-step'),
        $quizForm: $j('#quizForm'),

        init: function() {
            this.buildQuiz();
        },
        /*dynamically display questions based on template*/
        buildQuiz: function() { 
            var self = this;
            $j.getJSON("./dist/js/quiz-data.json", function(questionsData){
                var $questionsWrapper = $j('#questions-wrapper'),
                    questionsTemplate = QuizCore.templates['question-template'](questionsData);

                $questionsWrapper.html(questionsTemplate);

                self.questions = $j('.question');
                self.steps = $j('.quiz-step');
                self.steps[0].classList.add('visible');
                self.setupButtonHandlers();
                self.updateProgress(0);
            }).fail(function(){
                console.log('failed to get questions');
            });        
        },
        /*Slide the bar forward or back based on the position in the quiz*/
        updateProgress: function(currStep) {
            var $progressBar = $j('#progressBar'),
                $progressText = $j('#progressText'),
                totalSteps = this.steps.length-1;

            if (currStep < totalSteps) {
                $progressText.html('Question ' + (currStep+1) + ' of ' + totalSteps);                
            } else if (currStep == totalSteps) {
                $progressText.html('Results');  
            }
            $progressBar.css('width', (currStep+1)/(totalSteps+1)*100 + '%');
        },
        setupButtonHandlers: function() {
            var $nextBtn = $j('#nextBtn'), 
                $backBtn = $j('#backBtn'),
                $finishBtn = $j('#finishBtn'),
                $resetBtn = $j('#resetBtn'),
                $inputs = $j('.question input'),
                self = this;
 
            $nextBtn.on('click', function(){
                if (self.validateQuestion(self.currStep)) { 
                    self.changeStep(true);                    
                } else {
                    $j('#validationMessage').removeClass('invisible');
                }
            });
            $backBtn.on('click', function(){
                self.changeStep(false);
            });
            $inputs.on('change', function(){
                self.validateQuestion(self.currStep);
            });
            $finishBtn.on('click', function() {
                if (self.validateQuestion(self.currStep)) { 
                    self.calculateResult();                    
                } else {
                    $j('#validationMessage').removeClass('invisible');
                }
            });
            $resetBtn.on('click', function() {
                self.steps[self.currStep].classList.remove('visible');
                self.currStep = 0;
                self.steps[0].classList.add('visible');
                self.$quizForm[0].reset();
                self.$quizForm.attr('class','quiz-wrapper first');
                self.updateProgress(0);
            });
        },
        /*Show hide the next or previous step
        **isForward bool for advancing
        */
        changeStep: function(isForward) {
            var currIndex = this.currStep,
                newIndex,
                quizStatusClasses = "quiz-wrapper ",
                totalQuestions = this.questions.length;

            this.steps[currIndex].classList.toggle('visible');

            newIndex = this.currStep = (isForward) ? ++currIndex : --currIndex;
            
            this.steps[newIndex].classList.toggle('visible');

            //add appropriate classes to show/hide relevant buttons
            if (newIndex === 0) { 
                quizStatusClasses += "first"; 
            } else if (newIndex == totalQuestions-1) {
                quizStatusClasses += "last";
            } else if (newIndex == totalQuestions) { //results step
                quizStatusClasses += "results";              
            }
            
            this.updateProgress(newIndex);

            this.$quizForm.attr('class', quizStatusClasses);
        },
        //make sure an option is selected by looping radio buttons
        validateQuestion: function(qNum) {
            var isValid = false,
                qOptions = document.getElementsByName('q'+ qNum);

            for (var r = 0; r < qOptions.length; r++) {
                if (qOptions[r].checked === true) {
                    isValid = true;
                    $j('#validationMessage').addClass('invisible');
                }
            }
            return isValid;
        },
        calculateResult: function(){
            var userInputs = $j('#quizForm').serializeArray(),
                resultKey = "milford";

            //Simple results algorithm - LOTR fans get Tongariro, 2-3 days is definitely Routeburn, otherwise depends on the landscape    

            if (userInputs[1].value == "yesplus") {
                resultKey = "tongariro";
            }
            else if (userInputs[0].value == "2") {
                resultKey = "routeburn";
            }
            else if (userInputs[2].value == "mountains") {
                resultKey = "kepler";
            } 
            else if (userInputs[2].value == "oceans") {
                resultKey = "abeltasman";
            }
           
           this.fetchResultHtml(resultKey);

        },
        /*Use template and JSON to dynamically build result section*/
        fetchResultHtml: function(resultKey) {
            var $resultsSection = $j('#resultsWrapper'),
                resultsTemplate,
                self = this;

            $j.getJSON("./dist/js/results-data.json", function(resultsData){
                var result = resultsData.results[resultKey];
                resultsTemplate = QuizCore.templates['results-template'](result);
                $resultsSection.html(resultsTemplate);
                self.changeStep(true);
            }).fail(function(){
                console.log('error getting results');
            });
        }
    };

    window.QuizController = QuizController;

    $j(document).ready(function() {
        QuizController.init();
    
    });

})(window, document, jQuery.noConflict(), undefined);
