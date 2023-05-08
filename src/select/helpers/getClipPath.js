export const getClipPath=(checkBoxProps)=>{
    const {type} = {...checkBoxProps}
    switch(type){
        case 'mark':
            return 'polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%)';
        case 'square':
            return 'polygon(20% 20%, 90% 20%, 90% 90%, 20% 90%)';
        case 'circle':
            return 'circle(40% at 55% 55%)';
        default:
            return 'polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%)';
        
    }
}