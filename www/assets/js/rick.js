/*Code by dagascar01 modified by Kya*/var i=0,toucher=0,verif=0;function myFunction(e){toucher+=1;var r=e.key;"r"!=r&&"R"!=r||1!=toucher?"r"==r&&"R"==r||1!=toucher||(toucher=0):verif=1,"i"!=r&&"I"!=r||2!=toucher||1!=verif?"i"==r&&"I"==r||2!=toucher||(toucher=0):verif=2,"c"!=r&&"C"!=r||3!=toucher||2!=verif?"c"==r&&"C"==r||3!=toucher||(toucher=0):verif=3,"k"!=r&&"K"!=r||4!=toucher||3!=verif?"k"==r&&"K"==r||4!=toucher||(toucher=0):verif=4,4==verif&&($("#video").html('<iframe width="1080" height="720" style="display: block;margin-left: auto;margin-right: auto;" src="https://www.youtube.com/embed/dQw4w9WgXcQ?feature=oembed&autoplay=1" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'),$("#main").remove(),verif=0,toucher=0)}