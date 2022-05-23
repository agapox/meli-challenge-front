import './breadcrumbs.css';

const Breadcrumbs = () => {

    const breadcrumbs: string[] = ['breadcrumb1', 'breadcrumb2', 'breadcrumb3', 'breadcrumb4']

    return (
        <ol className="andes-breadcrumb">
            <li className="andes-breadcrumb__item">
                <a href="#" target="_parent">
                    Volver al listado
                </a>
                <span>|</span>
            </li>
            {
                breadcrumbs.map((breadcrumbName: string, i: number) => (
                    <li className="andes-breadcrumb__item" key={breadcrumbName}>
                        { breadcrumbName }
                        { 
                            i !== 0 && <div className="andes-breadcrumb__chevron">
                                <svg xmlns="http://www.w3.org/2000/svg" width="6" height="8"><path fill="none" stroke="#727272" d="M1 0l4 4-4 4"></path></svg>
                            </div>
                        }
                    </li>
                ))
            }
        </ol>
    );
}

export default Breadcrumbs;