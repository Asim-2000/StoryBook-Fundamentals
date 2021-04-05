import React, {FC} from 'react';

interface TagProps{

    
     /**
   * What should be the title of the tag?
   */

    title?: string;

     /**
   * What should be BackGround color of the tag?
   * 
   */

    backgroundColor?: string;

}


const Tag: FC<TagProps> = ({title='MyTitle',backgroundColor}) => {
    return (
         <div style={{backgroundColor:backgroundColor}}>
             {title}
         </div>
     )
}

export default Tag;