import { useEffect, useState } from 'react';

const useCourses = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('./fakedb.json')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setCourses(data);
            });
    }, []);
    return [courses];
};

export default useCourses;