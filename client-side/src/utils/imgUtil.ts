import storage from 'good-storage'

export class LmgLoader {

    static imgList: Record<string, any> = {}



    static async getimgList() {
        console.log('main.ts执行utils.js');


        this.imgList = storage.get('imgList') || {}

        if (!LmgLoader.imgList || !LmgLoader.isNotEmptyimgList()) {

            this.imgList = LmgLoader.getImgAll()

            storage.set('imgList', LmgLoader.imgList)

        }

    }



    static isNotEmptyimgList() {

        return Object.getOwnPropertyNames(LmgLoader.imgList).length

    }

    static getImg(name: string): string {

        //console.log('name:', name)

        // LmgLoader.imgList = LmgLoader.isNotEmptyimgList() ? LmgLoader.imgList : storage.get('imgList')

        return LmgLoader.imgList[name] //

    }



    static getImgAll(): any {

        const imgList: any = {}

        const viewImgModules: Record<string, any> = import.meta.glob(`../assets/img/**/**/*.png`, { eager: true })

        // import.meta.globEager(`../assets/img/**/**/*.png`)

        for (const path in viewImgModules) {

            if (viewImgModules[path].default) {

                const pathName = path.substring(path.lastIndexOf('/') + 1)

                imgList[pathName] = viewImgModules[path].default

            }

        }

        storage.set('imgList', this.imgList)

        return imgList

    }

}



export default LmgLoader.getImg