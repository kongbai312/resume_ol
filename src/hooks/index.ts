//常用的hooks钩子
import useClipboard from 'vue-clipboard3';
//简单检查是否是手机端
export const useIsMobile = () => {
    //是否是手机端
    const isMobile = computed(() => {
        return window.innerWidth < 996;
    })

    return{
        isMobile
    }
}

//实现复制功能到剪贴板
export const useCopy = () => {
    const { toClipboard } = useClipboard()
    const copyInfo = async (info : string , successMessage? : string) => {
      try {
        await toClipboard(info)
        if(successMessage){
            alert(successMessage)
        }
      } catch (e : any) {
        alert('网络错误')
      }
    }
    return {
        copyInfo
    }
}
