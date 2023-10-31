class Phone {
  constructor(
    //params
    model,
    color,
    frontCameras,
    backCameras,
    batteryLevel,
    status,
    dateAcquired
  ) {
    //props
    this.model = model;
    this.color = color;
    this.frontCameras = frontCameras;
    this.backCameras = backCameras;
    this.batteryLevel = batteryLevel;
    this.status = status;
    this.dateAcquired = dateAcquired;
  }

  //methods
  changeStatus(newStatus) {
    this.status = newStatus;
  }
  phoneAge() {
    let now = new Date();
    let acquired = new Date(this.dateAcquired);
    let elapsed = now - acquired;
    let daysSinceAcquired = Math.floor(elapsed / (1000 * 3600 * 24));
    return daysSinceAcquired;
  }
}

export default Phone;
