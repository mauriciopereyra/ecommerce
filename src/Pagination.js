import { Link } from 'react-router-dom'
import './Pagination.css'
import { useNavigate } from "react-router-dom";

const Pagination = (props) => {
    const currentPage = props.currentPage
    const navigate = useNavigate();
    const totalPages = props.totalPages

    const renderPages = (totalPages) => {
        return [...Array(totalPages).keys()].map((page) => {
            return <option>{page+1}</option>
        })
    }

    return (
        totalPages > 1 ?
            <div className='pagination'>

                <Link to={`?page=${currentPage-1}`}
                    style={{visibility:currentPage == 1 ? 'hidden' : ""}}
                >
                    <span div className='pagination-left'>
                        PREVIOUS
                    </span>
                </Link>

                <span div className='pagination-dropdown'>
                    Page
                    <select value={currentPage} onChange={(event) => {
                        navigate(`?page=${event.target.value}`)
                    }}>
                        {renderPages(totalPages)}
                    </select>
                    of {totalPages}
                </span>
                <Link to={`?page=${currentPage+1}`}
                style={{visibility:currentPage == totalPages ? 'hidden' : ""}}
            >
                    <span div className='pagination-right'>
                        NEXT
                    </span>
                </Link>
            </div> : ""

    )
}

export default Pagination