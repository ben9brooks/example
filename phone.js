class Phone {
  constructor(
    //params
    model,
    color,
    frontCameras,
    backCameras,
    batteryLevel,
    status
  ) {
    //props
    this.model = model;
    this.color = color;
    this.frontCameras = frontCameras;
    this.backCameras = backCameras;
    this.batteryLevel = batteryLevel;
    this.status = status;
  }

  //methods
  changeStatus(newStatus) {
    this.status = newStatus;
  }
}

export default Phone;
