import Videos from '../Videos/index'
const listFiles = [
  {
    id: 1,
    type: 'video',
    visible: true,
    pathImageInit: 'posterVideos/Fot_01_home.jpg',
    path: 'Cam_02_A_2.mp4',
    pathSeed: 'Cam_02_A_2.mp4',
    converted: false,
    origin: 'spin',
  },
{
    id: 2,
    type: 'video',
    visible: true,
    pathImageInit: 'posterVideos/Fot_03_B.jpg',
    path: 'Cam_02_B.mp4',
    pathSeed: 'Cam_02_B.mp4',
    converted: false,
    origin: 'spin',
  },
  {
    id: 3,
    type: 'video',
    visible: true,
    pathImageInit: 'posterVideos/Fot_03_B.jpg',
    path: 'Cam_02_C.mp4',
    pathSeed: 'Cam_02_C.mp4',
    converted: false,
    origin: 'spin',
  }
]
const actions = {
  getSpin({ commit }) {
    commit('storeSpin', listFiles)
    return listFiles
  }
}

export default actions