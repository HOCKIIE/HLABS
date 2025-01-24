import Image from "next/image";
export default function Experience(){
    const items = [{
        "title":"at-once.info",
        "image":"/image/portfolio/at-once.info.png",
        "url":'https://at-once.info/',
        "description":"",
        "hashtag":['Laravel','Bootstrap',"MySQL","JavaScript" ,"jQuery"]
    },{
        "title":"at-once.info",
        "image":"/image/portfolio/at-once.info.png",
        "url":'https://at-once.info/',
        "description":"",
        "hashtag":['Laravel','Bootstrap']
    },{
        "title":"at-once.info",
        "image":"/image/portfolio/at-once.info.png",
        "url":'https://at-once.info/',
        "description":"",
        "hashtag":['Laravel','Bootstrap']
    },{
        "title":"at-once.info",
        "image":"/image/portfolio/at-once.info.png",
        "url":'https://at-once.info/',
        "description":"",
        "hashtag":['Laravel','Bootstrap']
    },{
        "title":"at-once.info",
        "image":"/image/portfolio/at-once.info.png",
        "url":'https://at-once.info/',
        "description":"",
        "hashtag":['Laravel','Bootstrap']
    },{
        "title":"at-once.info",
        "image":"/image/portfolio/at-once.info.png",
        "url":'https://at-once.info/',
        "description":"",
        "hashtag":['Laravel','Bootstrap']
    },{
        "title":"at-once.info",
        "image":"/image/portfolio/at-once.info.png",
        "url":'https://at-once.info/',
        "description":"",
        "hashtag":['Laravel','Bootstrap']
    },{
        "title":"at-once.info",
        "image":"/image/portfolio/at-once.info.png",
        "url":'https://at-once.info/',
        "description":"",
        "hashtag":['Laravel','Bootstrap']
    },{
        "title":"at-once.info",
        "image":"/image/portfolio/at-once.info.png",
        "url":'https://at-once.info/',
        "description":"",
        "hashtag":['Laravel','Bootstrap']
    },{
        "title":"at-once.info",
        "image":"/image/portfolio/at-once.info.png",
        "url":'https://at-once.info/',
        "description":"",
        "hashtag":['Laravel','Bootstrap']
    },{
        "title":"at-once.info",
        "image":"/image/portfolio/at-once.info.png",
        "url":'https://at-once.info/',
        "description":"",
        "hashtag":['Laravel','Bootstrap']
    },{
        "title":"at-once.info",
        "image":"/image/portfolio/at-once.info.png",
        "url":'https://at-once.info/',
        "description":"",
        "hashtag":['Laravel','Bootstrap']
    }];
    return (<>
    <section className="portfolio overflow-x-hidden">
        <div className="container">
            <div className="v-line start-0 ms-[-24px] col-start-1 row-span-full row-start-1 hidden md:block border-x border-black/10 dark:border-white/10 h-full absolute w-10 bg-[image:repeating-linear-gradient(315deg,_rgba(0,0,0,0.1)_0,_rgba(0,0,0,.1)_1px,_transparent_0,_transparent_50%)] dark:bg-[image:repeating-linear-gradient(315deg,_rgba(255,255,255,0.1)_0,_rgba(255,255,255,.1)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px]"></div>
            <div className="grid">
                <div className="pt-20 md:pt-40 mb-4"></div>
                <span className="block ms-1 mb-[5px] text-black/10 dark:text-slate-700 font-roboto-mono text-xs">text-6xl mb-6 text-gray-800</span>
                <div className="pipeline"><h1 className="text-6xl mb-6 text-gray-800 dark:text-gray-300">Portfolio</h1></div>
                <div className="pipeline"></div>
                <span className="block ms-1 mb-[5px] text-black/10 dark:text-slate-700 font-roboto-mono text-xs">grid grid-cols-12 gap-6 pt-4</span>
                <div className="grid grid-cols-12 pipeline bg-gray-950/5 dark:bg-white/10">
                    {items.map((v,k)=>
                        <div className="col-span-12 md:col-span-4 xl:col-span-4 m-2">
                            <div className="overflow-hidden p-1 bg-gray-300 dark:bg-slate-900 min-h-[200px] border dark:border-gray-800 rounded-xl">
                                <div className="tools ms-1 mt-1 mb-2 flex gap-2">
                                    <div className="w-3 h-3 bg-black/20 dark:bg-white/10 rounded-full"></div>
                                    <div className="w-3 h-3 bg-black/20 dark:bg-white/10 rounded-full"></div>
                                    <div className="w-3 h-3 bg-black/20 dark:bg-white/10 rounded-full"></div>
                                </div>
                                <div className="bg-white/30 dark:bg-slate-800 rounded-lg p-2">
                                    <Image src={v.image} height="500" width="500" alt={v.title} quality={100} className="aboslute w-full rounded-lg transition duration-300 transform-3d rotate-x-[30deg] -rotate-y-[5deg] rotate-z-[15deg]"/>
                                    <a href={v.url} target="_blank" className="text-gray-700 block mt-2 dark:text-slate-200">{v.title}</a>
                                    <div className="hashtag flex flex-wrap gap-2 my-2">{v.hashtag.map((v2,k2)=><div key={k2} className="text-indigo-500 dark:text-emerald-600 text-xs rounded-full">#{v2}</div>)}</div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <div className="pipeline"><div className="mt-40"></div></div>
            </div>
            <div className="v-line end-0 top-0 me-[-24px] row-span-full row-start-1 hidden md:block border-x border-black/10 dark:border-white/10 h-full absolute w-10 bg-[image:repeating-linear-gradient(315deg,_rgba(0,0,0,0.1)_0,_rgba(0,0,0,.1)_1px,_transparent_0,_transparent_50%)] dark:bg-[image:repeating-linear-gradient(315deg,_rgba(255,255,255,0.1)_0,_rgba(255,255,255,.1)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px]"></div>
        </div>
    </section>
    </>);
}