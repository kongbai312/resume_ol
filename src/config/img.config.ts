//作者头像
import AuthorImg from '@/assets/image/author.png';
//月亮图片
import MoonImg from '@/assets/image/moon.jpg';
//home背景图
import HomeImg from '@/assets/image/bg-home.jpg';
//skill背景图
import SkillImg from '@/assets/image/bg-skill.jpg';
//work背景图
import WorkImg from '@/assets/image/bg-work.jpg';
//project背景图
import ProjectImg from '@/assets/image/bg-project.jpg';
//about背景图
import AboutImg from '@/assets/image/bg-about.jpg';
//个人博客图片
import BlogImg from '@/assets/image/blog.png';
//贸速达
import MaosudaImg from '@/assets/image/maosuda.jpg';
//安心送
import AnxinsongImg from '@/assets/image/anxinsong.png';
//修仙全靠运气图片
import XiuxianImg from '@/assets/image/xiuxian.png';
//安能公司
import AnnengCompany from '@/assets/image/anneng-company.jpg';

//是否使用图床资源
const isUseImgBed = true

//图片资源对象
const imgObj = {
    //作者头像
    authorImgBed : 'https://pic.imgdb.cn/item/6639cb680ea9cb14032e3f52.jpg',
    zuthorImgLocal : AuthorImg,
    //月亮
    moonImgBed : 'https://pic.imgdb.cn/item/6639cb860ea9cb14032e6a65.jpg',
    moonImgLocal : MoonImg,
    //home背景图
    homeImgBed : 'https://pic.imgdb.cn/item/6639cb690ea9cb14032e4104.jpg',
    homeImgLocal : HomeImg,
    //skill背景图
    skillImgBed : 'https://pic.imgdb.cn/item/6639cb7a0ea9cb14032e58b9.jpg',
    skillImgLocal : SkillImg,
    //work背景图
    workImgBed : 'https://pic.imgdb.cn/item/6639cb7a0ea9cb14032e590b.jpg',
    workImgLocal : WorkImg,
    //project背景图
    projectImgBed : 'https://pic.imgdb.cn/item/6639cb7a0ea9cb14032e5855.jpg',
    projectImgLocal : ProjectImg,
    //about背景图
    aboutImgBed : 'https://pic.imgdb.cn/item/6639cb690ea9cb14032e409a.jpg',
    aboutImgLocal : AboutImg,
    //个人博客
    blogImgBed : 'https://pic.imgdb.cn/item/6639cb7b0ea9cb14032e5942.png',
    blogImgLocal : BlogImg,
    //贸速达
    maosudaImgBed : 'https://pic.imgdb.cn/item/6639cb860ea9cb14032e6a3a.jpg',
    maosudaImgLocal : MaosudaImg,
    //安心送
    anxinsongImgBed : 'https://pic.imgdb.cn/item/6639cb200ea9cb14032dd21a.png',
    anxinsongImgLocal : AnxinsongImg,
    //修仙全靠运气
    xiuxianImgBed : 'https://pic.imgdb.cn/item/6639cb860ea9cb14032e6a89.png',
    xiuxianImgLocal : XiuxianImg,
    //安能贸易公司
    annengCompanyImgBed : 'https://pic.imgdb.cn/item/6639cb7b0ea9cb14032e5998.jpg',
    annengCompanyImgLocal : AnnengCompany,
}

//是否使用图床资源
export default {
    isUseImgBed,
    authorImg : isUseImgBed ? imgObj.authorImgBed : imgObj.zuthorImgLocal,
    moonImg : isUseImgBed ? imgObj.moonImgBed : imgObj.moonImgLocal,
    homeImg : isUseImgBed ? imgObj.homeImgBed : imgObj.homeImgLocal,
    skillImg : isUseImgBed ? imgObj.skillImgBed : imgObj.skillImgLocal,
    workImg : isUseImgBed ? imgObj.workImgBed : imgObj.workImgLocal,
    projectImg : isUseImgBed ? imgObj.projectImgBed : imgObj.projectImgLocal,
    aboutImg : isUseImgBed ? imgObj.aboutImgBed : imgObj.aboutImgLocal,
    blogImg: isUseImgBed ? imgObj.blogImgBed : imgObj.blogImgLocal,
    maosudaImg: isUseImgBed ? imgObj.maosudaImgBed : imgObj.maosudaImgLocal,
    anxinsongImg: isUseImgBed ? imgObj.anxinsongImgBed : imgObj.anxinsongImgLocal,
    xiuxianImg: isUseImgBed ? imgObj.xiuxianImgBed : imgObj.xiuxianImgLocal,
    annengCompanyImg: isUseImgBed ? imgObj.annengCompanyImgBed : imgObj.annengCompanyImgLocal,
}