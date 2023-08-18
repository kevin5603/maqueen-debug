function 初始設定 () {
    leftSensor = maqueen.readPatrol(maqueen.Patrol.PatrolLeft)
    rightSensor = maqueen.readPatrol(maqueen.Patrol.PatrolRight)
}
function 左轉 () {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 50)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 100)
}
function 右轉 () {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 100)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 50)
}
function 測試用模擬感測器 () {
    leftSensor = 1
    rightSensor = 0
}
function 後退 () {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 100)
}
function 前進 () {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 100)
}
let rightSensor = 0
let leftSensor = 0
測試用模擬感測器()
basic.forever(function () {
    if (leftSensor == 1 && rightSensor == 0) {
        右轉()
    } else if (leftSensor == 0 && rightSensor == 1) {
        左轉()
    } else if (leftSensor == 1 && rightSensor == 1) {
        後退()
    } else {
        前進()
    }
})
