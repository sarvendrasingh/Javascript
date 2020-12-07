var count = 0;
        document.getElementById("sub").disabled = true;

        function increment() {
            document.getElementById("sub").disabled = false;
            count++;
            document.getElementById("count").innerHTML = count;
        }

        function decrement() {
            if (count === 0) {
                document.getElementById("sub").disabled = true;
            } else {
                count--;
                document.getElementById("count").innerHTML = count;
            }
            if (count === 0) {
                document.getElementById("sub").disabled = true;
            }
        }