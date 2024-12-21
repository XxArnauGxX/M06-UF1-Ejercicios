document.getElementById("execute").addEventListener("click", function() {
    const year = parseInt(document.getElementById("year").value, 10);
    const month = parseInt(document.getElementById("month").value, 10) - 1;
    const day = parseInt(document.getElementById("day").value, 10);

    const inputDate = new Date(year, month, day);
    const currentDate = new Date();
    const textArea = document.getElementById("textArea");

    if (isNaN(inputDate.getTime())) {
        textArea.value = "Invalid date. Please check your inputs.";
        return;
    }

    const differenceInTime = inputDate.getTime() - currentDate.setHours(0, 0, 0, 0);
    const differenceInDays = Math.ceil(differenceInTime / (1000 * 60 * 60 * 24));

    if (differenceInDays > 0) {
        textArea.value = `The entered date is in the future. There are ${differenceInDays} days until that date.`;
    } else if (differenceInDays < 0) {
        textArea.value = `The entered date is in the past. It was ${Math.abs(differenceInDays)} days ago.`;
    } else {
        textArea.value = "The entered date is today!";
    }
});
