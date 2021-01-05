import React, {useRef, useEffect} from 'react';
import WebViewer from '@pdftron/webviewer';

const PdfTronContainer = () => {
    const viewerDiv = useRef<HTMLDivElement>(null)

    useEffect(() => {
        WebViewer({
                path: 'lib',
                initialDoc: 'https://file-examples-com.github.io/uploads/2017/10/file-sample_150kB.pdf'
            },
            viewerDiv.current as HTMLDivElement).then((instance) => {
            const { docViewer } = instance;
            // console.log('instance :', instance)
            // console.log('docViewer :', docViewer)

            // you can now call WebViewer APIs here...
        })
    }, [])

    return (
        <div ref={viewerDiv} style={{height: '200px'}}/>
    )
}

export default PdfTronContainer;
