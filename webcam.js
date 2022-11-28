window.onload = async () => {


    const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });

    console.log(stream);

    document.querySelector('#video').srcObject = stream;

}


