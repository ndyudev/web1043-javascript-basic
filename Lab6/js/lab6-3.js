let listImages = [
  "./assets/img/bao.png",
  "./assets/img/bua.jpg",
  "./assets/img/keo.png",
];

let currentIndex = 0;

function showImage() {
  const imgElement = document.createElement("img");
  imgElement.src = listImages[currentIndex];
  imgElement.alt = "Image";

  imgElement.addEventListener("mouseover", () => {
    currentIndex++;
    if (currentIndex >= listImages.length) currentIndex = 0;
    imgElement.src = listImages[currentIndex];
  });

  imgElement.addEventListener("mouseout", () => {
    currentIndex = 0;
    imgElement.src = listImages[currentIndex];
  });

  const imageContainer = document.getElementById("images");
  imageContainer.innerHTML = ""; // clear cũ
  imageContainer.appendChild(imgElement); // thêm mới
}

function showFirst() {
  currentIndex = 0;
  showImage();
}

function showLast() {
  currentIndex = listImages.length - 1;
  showImage();
}

function showNext() {
  currentIndex++;
  if (currentIndex >= listImages.length) currentIndex = 0;
  showImage();
}

function showPrev() {
  currentIndex--;
  if (currentIndex < 0) currentIndex = listImages.length - 1;
  showImage();
}

showImage(); // khởi tạo ban đầu
