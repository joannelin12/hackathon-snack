function snackFilter() {

        // Hide Button, Show Taste Options
        document.getElementById("snackContainer").html = "";
        document.getElementById("tasteOptions").style.display = "block";
        document.getElementById("surpriseButton").style.display = "none";

        // Listen to taste Radio Button
        $('.taste').click(function() {

            //Hide tasteOptions, Show Texture Options
            document.getElementById("tasteOptions").style.display = "none";
            document.getElementById("textureOptions").style.display = "block";
        });



        // Listen to texture Radio Button
        $('.texture').click(function() {
            //Hide textureOptions
            document.getElementById("textureOptions").style.display = "none";
       
            // Filter items
            var tasteFilter = document.querySelector('input[name="taste"]:checked').value;
            var textureFilter = document.querySelector('input[name="texture"]:checked').value;

            function filterSnacks(element) {

                return element.taste == tasteFilter && element.texture == textureFilter;
            };
            // new data to randomize
            var newSnackSource = snackSource.filter(filterSnacks);



            // assign random number
            var sourceLength = newSnackSource.length;
            var randomNumber= Math.floor(Math.random()*sourceLength);

            //setting random
            for(i=0;i<=sourceLength;i+=1){
                var newSnackName = newSnackSource[randomNumber].snack;
                var newSnackPhoto = newSnackSource[randomNumber].photo;

                //animation
                var timeAnimation = 300;
                var snackContainer = $('#snackContainer');

                //fade out animation with callback
                snackContainer.fadeIn(timeAnimation, function(){
                    snackContainer.html('');
                    snackContainer.append('<div class="crop" id="snackPhoto"><img src="'+''+newSnackPhoto+'"></div>'+'<p>'+newSnackName+'</p>');

                });
            };

            document.getElementById("snackContainer").style.display = "block";
            document.getElementById("againButton").style.display = "block";
            document.getElementById("resetButton").style.display = "block";
            document.getElementById("cartButton").style.display = "block";
        });

};

        // Listen to again button
function againForm() {

            // Filter items
            var tasteFilter = document.querySelector('input[name="taste"]:checked').value;
            var textureFilter = document.querySelector('input[name="texture"]:checked').value;

            function filterSnacks(element) {

                return element.taste == tasteFilter && element.texture == textureFilter;
            };
            // new data to randomize
            var newSnackSource = snackSource.filter(filterSnacks);



            // assign random number
            var sourceLength = newSnackSource.length;
            var randomNumber= Math.floor(Math.random()*sourceLength);

            //setting random
            for(i=0;i<=sourceLength;i+=1){
                var newSnackName = newSnackSource[randomNumber].snack;
                var newSnackPhoto = newSnackSource[randomNumber].photo;

                //animation
                var timeAnimation = 300;
                var snackContainer = $('#snackContainer');

                //fade out animation with callback
                snackContainer.fadeOut(timeAnimation, function(){
                    snackContainer.html('');
                    snackContainer.append('<div class="crop" id="snackPhoto"><img src="'+''+newSnackPhoto+'"></div>'+'<p>'+newSnackName+'</p>');

                    snackContainer.fadeIn(timeAnimation);
                });
            };
};

        // Listen to again button
function resetForm() {

            document.getElementById("againButton").style.display = "none";
            document.getElementById("resetButton").style.display = "none";
            document.getElementById("cartButton").style.display = "none";
            document.getElementById("surpriseButton").style.display = "block";

            document.getElementById("sweet").checked = false;
            document.getElementById("salty").checked = false;
            document.getElementById("spicy").checked = false;
            document.getElementById("crunchy").checked = false;
            document.getElementById("soft").checked = false;

            var timeAnimation = 0;
            var snackContainer = $('#snackContainer');
            
            snackContainer.fadeOut(timeAnimation, function(){
                    snackContainer.html('');

                });
            document.getElementById("snackContainer").style.display = "none";
};