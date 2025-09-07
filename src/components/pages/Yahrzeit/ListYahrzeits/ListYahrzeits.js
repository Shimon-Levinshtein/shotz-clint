import React, { useEffect, useState, useCallback } from 'react';
import styles from "./ListYahrzeits.module.scss";
import { connect } from 'react-redux';
import { deleteYahrzeitById, getAllYahrzeits } from '../../../../states/listYahrzeits/listYahrzeits.action';
import { useLocation, useNavigate } from 'react-router-dom';

const ListYahrzeits = props => {

    const location = useLocation();
    const navigate = useNavigate();

    const listYahrzeits = props.listYahrzeits;

    const [idYahrzeit] = useState(location.state?.idYahrzeit ? location.state.idYahrzeit : null);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        if (!listYahrzeits) {
            props.getAllYahrzeits();
        };
    }, [listYahrzeits]);

    const vrapper = useCallback(node => {
        if (node) {
            node.scrollIntoView({ behavior: "smooth", block: "end" });
        };
    }, [idYahrzeit]);

    const deleteYahrzeits = (id, name) => {
        alert.show(` בטוח שאתה רוצה למחוק את יארצייט בשם (${name})`, {
            title: "מחיקה",
            closeCopy: "לא",
            actions: [
                {
                    copy: "כן",
                    onClick: () => props.deleteYahrzeitById(id),
                },
            ],
        });
    };

    const editYahrzeit = (id, data) => {
        navigate(`/yahrzeit/creat-yahrzeit`, {
            state: { yahrzeitId: id, data },
        });
    };

    // Filter yahrzeits based on search term
    const filteredYahrzeits = listYahrzeits ? listYahrzeits.filter(item => 
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.hebDateFomat.toLowerCase().includes(searchTerm.toLowerCase())
    ) : [];

    if (!listYahrzeits) return <h4 dir='auto'>טוען רשימה...</h4>;

    return (
        <div className={styles.continer}>
            <div className={styles.title}>
                רשימת יארצייטים ({filteredYahrzeits.length})
            </div >
            <div className={styles.search_container}>
                <input
                    type="text"
                    placeholder="חיפוש לפי שם או תאריך..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className={styles.search_input}
                    dir="rtl"
                />
            </div>
            <div className={styles.list_box}>
                {filteredYahrzeits.map((item, index) => (
                    <div
                        key={index}
                        className={styles.list_item_box}
                        ref={idYahrzeit === item.id ? vrapper : null}
                        style={idYahrzeit === item.id ? { backgroundColor: '#8cd5ff' } : {}}
                        onClick={() => console.log(item)}
                    >
                        <div className={`${styles.but} blue-but`} onClick={() => editYahrzeit(item.id, item)}>
                            ערוך
                        </div >
                        <div className={`${styles.but} red-but`} onClick={() => deleteYahrzeits(item.id, item.name)}>
                            מחק
                        </div >
                        <div className={styles.item_date}>
                            {item.hebDateFomat}
                        </div >
                        <div className={styles.item_name}>
                            {item.name}
                        </div >
                    </div >
                ))}
            </div >
        </div >
    );
};


const mapStateToProps = state => {
    return {
        listYahrzeits: state.listYahrzeits,
    }
};
export default connect(mapStateToProps, {
    getAllYahrzeits,
    deleteYahrzeitById,
})(ListYahrzeits);