/* eslint no-undef : 0 */
const detox = require('detox');
const { execSync} = require('child_process');
const OPTIONS ={
    timeout: 10000,
    hillSignal: 'SIGKILL',
};

describe('screenshote', ()  =>{
    beforeEach(async ()=>{
        if (typeof(device) == 'undefined') {
            await detox.init();
          }
          await device.reloadReactNative();
    },1200)
    it('should take screenshotes',  ()=>{
        
        const fileName='screenshot.png'
         
            execSync(`adb shell screencap /sdcard/${fileName}`,
            
            OPTIONS);
            execSync(`adb pull  /sdcard/${fileName} $(pwd)/fastlane/screenshots/`,
            OPTIONS
            ); 

         
    })
});