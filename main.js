https://teachablemachine.withgoogle.com/models/0SYHH_ii_/
synthesis = window.speechSynthesis;
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/0SYHH_ii_/model.json", model_ready)

Webcam.set(
    {
        width: 350,
        height: 230,
        image_format: "jpeg",
        jpeg_quality: 95
    }
)
Webcam.attach("#camera");
function snap() {
    Timer = setTimeout(function () {
        Webcam.snap(function (image_src) {
            document.getElementById("image").innerHTML = "<img id='img' height='300' width='350' src='" + image_src + "'>";
        })

    }, 3000)

}
function model_ready() {
    console.log("success");
}
