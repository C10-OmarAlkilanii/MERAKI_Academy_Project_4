const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    img:{type:String ,required:true},
    title: {type:String,required:true},
    products: {type:mongoose.Schema.Types.ObjectId, ref:"Category"}
})

module.exports = mongoose.model("Products",productSchema);

/* 
{Baverage}
-img: https://cdnprod.mafretailproxy.com/sys-master-root/h15/hc5/44809520971806/1700Wx1700H_422654_main.jpg?im=Resize=400
title : water
description: Lorem....

-img: https://cdnprod.mafretailproxy.com/sys-master-root/h82/h59/9453750845470/27994_main.jpg_1700Wx1700H?im=Resize=400
title: Vimto
description: Lorem...

-img: https://cdnprod.mafretailproxy.com/sys-master-root/h8b/h0b/51508860321822/1700Wx1700H_778758_main.jpg?im=Resize=400
title:Cola
description: Lorem...

-img: https://cdnprod.mafretailproxy.com/sys-master-root/h97/h79/17059970744350/56969_main.jpg_1700Wx1700H?im=Resize=400
title:Ghazal
description: Lorem...

{Meat}

-img:https://cdnprod.mafretailproxy.com/sys-master-root/h22/h7a/50009133940766/1700Wx1700H_560391_main.jpg?im=Resize=400
title: Meat
description: 

-img:https://cdnprod.mafretailproxy.com/sys-master-root/h24/ha0/13932048777246/568361_main.jpg_1700Wx1700H?im=Resize=400
title: Meat
description

-img:https://cdnprod.mafretailproxy.com/sys-master-root/h86/h5a/34975684427806/1700Wx1700H_608792_main.jpg?im=Resize=400
title: Meat
description

-img: https://cdnprod.mafretailproxy.com/sys-master-root/h85/hec/34711228514334/380550_main.jpg_1700Wx1700H?im=Resize=400
title: Meat
description

-img: https://cdnprod.mafretailproxy.com/sys-master-root/h70/h8f/9742123434014/608794_main.jpg_1700Wx1700H?im=Resize=400
title: Meat
description

{Electronics}

-img: https://cdnprod.mafretailproxy.com/sys-master-root/hb0/ha8/15675654275102/682509_1.jpg_1700Wx1700H?im=Resize=400
title: 
description:

-img: https://cdnprod.mafretailproxy.com/sys-master-root/hb3/h45/50633527361566/1700Wx1700H_761013_main.jpg?im=Resize=400
title: 
description:

-img: https://cdnprod.mafretailproxy.com/sys-master-root/h11/h7d/50161668554782/1700Wx1700H_737328_main.jpg?im=Resize=400
title: 
description:

-img: https://cdnprod.mafretailproxy.com/sys-master-root/hcc/hd0/14951843463198/596267_main.jpg_1700Wx1700H?im=Resize=400
title: 
description:

-img: https://cdnprod.mafretailproxy.com/sys-master-root/h14/ha0/9225710960670/596268_main.jpg_1700Wx1700H?im=Resize=400
title: 
description:

-img: https://cdnprod.mafretailproxy.com/sys-master-root/h6f/hfd/44032342917150/1700Wx1700H_737757_main.jpg?im=Resize=400
title: 
description:

{Bustan Fresh}

-img: https://cdnprod.mafretailproxy.com/sys-master-root/h83/h8a/61761975091230/1700Wx1700H_727819_main.jpg?im=Resize=400
title: 
description:

-img: https://cdnprod.mafretailproxy.com/sys-master-root/h85/hd9/61761979351070/1700Wx1700H_727844_main.jpg?im=Resize=400
title: 
description:

-img: https://cdnprod.mafretailproxy.com/sys-master-root/h09/hcf/61761979678750/1700Wx1700H_727820_main.jpg?im=Resize=400
title: 
description:

-img: https://cdnprod.mafretailproxy.com/sys-master-root/hdd/hf1/61761974108190/1700Wx1700H_727794_main.jpg?im=Resize=400
title: 
description:

-img: https://cdnprod.mafretailproxy.com/sys-master-root/h24/hb9/61761981874206/1700Wx1700H_727843_main.jpg?im=Resize=400
title: 
description:
*/