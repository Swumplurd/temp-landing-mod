function selectBundleType(event) {
  console.log(event.target.id);
  /* for (const elem of document.getElementsByName("bundle-types")) {
          elem.classList.remove("active");
        }
        event.target.classList.add("active"); */

  document.getElementById("bundle-familiar-section").classList.add("d-none");
  document.getElementById("bundle-deportes-section").classList.add("d-none");
  document.getElementById("bundle-entretenimiento-section").classList.add("d-none");
  document.getElementById("bundle-duo-section").classList.add("d-none");
  switch (event.target.id) {
    case "bundle-familiar-radio":
      document.getElementById("bundle-familiar-section").classList.remove("d-none");
      break;
    case "bundle-deportes-radio":
      document.getElementById("bundle-deportes-section").classList.remove("d-none");
      break;
    case "bundle-entretenimiento-radio":
      document.getElementById("bundle-entretenimiento-section").classList.remove("d-none");
      break;
    case "bundle-duo-radio":
      document.getElementById("bundle-duo-section").classList.remove("d-none");
      break;
    default:
      document.getElementById("bundle-familiar-section").classList.remove("d-none");
  }
  // _selectedView = event.target.id;
}
