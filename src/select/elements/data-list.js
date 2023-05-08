import React, { useState, useRef, useEffect, useCallback, useContext } from "react";
import MultiOptions from "../multi-select/option";
import SingleOptions from '../single-select/option'
import { SelectContext } from '../contextApi'
import {InfiniteScrollWrapper} from '../styles'

function App({ type, activeId, listWidth }) {
    const {
        details,
        fitlersData: filterData,
        handleCheck,
        handleCheckAll,
        handleSingleSelect,
    } = useContext(SelectContext);
    const {
        label = "label",
        bodyProps,
    } = { ...details };
    const { isOptionScrollable = false, isTooltipEnable } = { ...bodyProps };
    const [page, setPage] = useState(1);
    const [detailsData, setDetails] = useState([])
    const loader = useRef(null);

    const handleObserver = useCallback((entries) => {
        const target = entries[0];
        if (target.isIntersecting) {
            setPage((prev) => prev + 20);
        }
    }, []);

    useEffect(() => {
        setDetails(filterData.slice(0, page))
    }, [page, filterData])

    useEffect(() => {
        const option = {
            root: document.querySelector("#scrollArea"),
            rootMargin: "0px",
            threshold: 1.0
        };
        const observer = new IntersectionObserver(handleObserver, option);
        if (loader.current) observer.observe(loader.current);
    }, [handleObserver]);
    return (
        <InfiniteScrollWrapper id='scrollArea' className="nspira__select--data-scroll-area">
            {
                type === 'multi-select' ?
                    detailsData.map((item) => (
                        <MultiOptions
                            key={item.idx}
                            item={item}
                            id={item.idx}
                            handleCheck={handleCheck}
                            isChecked={item.isChecked}
                            label={label}
                            activeId={activeId}
                            handleCheckAll={handleCheckAll}
                            isScrollable={isOptionScrollable}
                            isTooltipEnable={isTooltipEnable}
                            listWidth={listWidth}
                        />
                    )) :
                    detailsData.map((item) => (
                        <SingleOptions
                            key={item._id}
                            item={item}
                            id={item._id}
                            handleSelect={handleSingleSelect}
                            isHighlight={item.isHighlight}
                            label={label}
                            activeId={activeId}
                            isScrollable={isOptionScrollable}
                            isTooltipEnable={isTooltipEnable}
                            listWidth={listWidth}
                        />
                    ))
            }
            <div ref={loader} />
        </InfiniteScrollWrapper>
    );
}

export default App;
