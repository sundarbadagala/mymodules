import { useState } from "react";
import {BasicTable, ActionTable, SideTable, NestedTable } from "./index";
import {renderFields} from './table.helper'

export const Basictable=()=>{
    return(
        <>
            <BasicTable data={data} fields={basicFields}/>
        </>
    )
}

export const Actiontable = () => {
    const [selctedObj, setSelectedObj] = useState([])
    const handleSelect=(val)=>{
        setSelectedObj(val)
    }
    return (
    <>
    <div style={{marginBottom:'20px'}}>
        {
            JSON.stringify(selctedObj)
        }
    </div>
      <ActionTable data={data} fields={fields} onSelect={handleSelect}/>
    </>
  );
};

export const Collapsibletable=()=>{
    return(
        <>
            <ActionTable 
                data={data}
                fields={collapseMainFields}
                collapsibleFields={collapseSubFields} 
            />
        </>
    
    )
}
export const Sidetable=()=>{
    return(
        <>
            <SideTable
                data={data.slice(3,5)}
                fields={complextFields}
            />
        </>
    )
}

export const Nestedtable=()=>{
    return(
        <>
            <NestedTable
                data={data.slice(2,3)}
                fields={primaryNestedFields}
            />
        </>
    )
}

export const CustomCellTable=()=>{
    const renderAvailable=(res)=>{
        console.log('render available', res);
    }
    const renderAge=(data)=>{
        console.log('render age',data.age > 18 ? 'user is major' : 'user is minor');
    }
    return(
        <>
            <ActionTable
                data={data} 
                fields={renderFields}
                handleAvailable={renderAvailable}
                handleAge={renderAge}
            />
        </>
    )
}


export const CustomStyleTable=()=>{
    const styles={
        container:{
            border:"10px solid #fadedc",
            borderRadius:'4px',
            overflow:'auto',
            width:'98.5vw',
            height:'200px'
        },
        table:{
            width:'1900px',
        },
        th:{
            color:'#4d4b4b',
            backgroundColor:'#f7c7c3',
            padding:'10px',
            textAlign:"center"
        },
        thead:{
            border:'2px solid #fa7a70'
        },
        tbody:{
            border:'2px solid #fa7a70'
        },
        td:{
            backgroundColor:'#faeeed',
            border:'1px solid #fcdbd9',
            padding:'6px 8px',
            textAlign:"center"
        }
    }
    return (
        <>
        <ActionTable 
            data={data} 
            fields={extraFields} 
            styles={styles}
        />
        </>
    )
}

export const CustomIconsTable=()=>{
    const icons ={
        search : <div>*</div>, // search, close, sort, arrowDown, arrowUp, refresh, collapse
    }
    return (
        <ActionTable
            data={data}
            fields={fields}
            iconProps={icons}
        />
    )
}

//===============================================================================================
//===============================================================================================

const data =[
    { "id": 1, "first_name": "Yule", "last_name": "Jellico", "email": "yjellico0@merriam-webster.com", "age": 7, "date_of_birth": "11/7/2006", "phone": "7022706207" , "is_available":true, "grades":[3,1,2,4], subjects:['telugu', 'english', 'maths', 'physics', 'biology']},
    { "id": 2, "first_name": "Jaclin", "last_name": "Ciccetti", "email": "jciccetti1@google.pl", "age": 6, "date_of_birth": "3/27/2016", "phone": "2633408734" , "is_available":false, "grades":[1,2], subjects:['telugu', 'english', 'maths', 'physics']},
    { "id": 3, "first_name": "Aloisia", "last_name": "Georgeau", "email": "ageorgeau2@usatoday.com", "age": 84, "date_of_birth": "11/23/2001", "phone": "4623492138" , "is_available":true, "grades":[4,3,1], subjects:['telugu', 'english', 'maths', 'physics', 'biology','zoology']},
    { "id": 4, "first_name": "Violante", "last_name": "Toulamain", "email": "vtoulamain3@youtu.be", "age": 91, "date_of_birth": "8/5/1995", "phone": "6342201219" , "is_available":false, "grades":[4,3,1], subjects:['telugu', 'english', 'maths', 'physics', 'biology','zoology','hindi','social studies','econmics','political science','atomic science']},
    { "id": 5, "first_name": "Lexine", "last_name": "Grigson", "email": "lgrigson4@reverbnation.com", "age": 37, "date_of_birth": "4/2/1997", "phone": "8345505775" , "is_available":false, "grades":[1,2,4,6,4,1], subjects:['telugu', 'biology','zoology','hindi','social studies','econmics','political science','atomic science']},
    { "id": 6, "first_name": "Eloisa", "last_name": "Gibbeson", "email": "egibbeson5@privacy.gov.au", "age": 11, "date_of_birth": "7/5/2008", "phone": "5162684586" , "is_available":true, "grades":[1,2,3,5,6], subjects:['social studies']},
    { "id": 7, "first_name": "Afton", "last_name": "Barrass", "email": "abarrass6@imdb.com", "age": 39, "date_of_birth": "11/20/2001", "phone": "4899911763" , "is_available":true, "grades":[4], subjects:['social studies','econmics','political science','atomic science']},
    { "id": 8, "first_name": "Donovan", "last_name": "Hirsthouse", "email": "dhirsthouse7@usda.gov", "age": 5, "date_of_birth": "5/22/2012", "phone": "6138960382" , "is_available":true, "grades":[4,2,17,12,21,32,23,123,43], subjects:['telugu', 'english', 'maths', 'physics', 'biology','zoology','hindi']},
    { "id": 9, "first_name": "Brock", "last_name": "Blackly", "email": "bblackly8@vk.com", "age": 77, "date_of_birth": "6/19/2004", "phone": "2975063464" , "is_available":false, "grades":[4,5,1,23,7,9,5,3,2], subjects:['social studies','econmics','political science','atomic science']},
    { "id": 10, "first_name": "Wynnie", "last_name": "Munby", "email": "wmunby9@edublogs.org", "age": 74, "date_of_birth": "12/3/2005", "phone": "4279768515", "is_available":true , "grades":[1,2,5,4,2], subjects:['telugu', 'english', 'maths', 'physics', 'biology','zoology','hindi','social studies','econmics','political science','atomic science']},
]

const basicFields =[
    { header:'First Name',field:'first_name', },
    { header:'Last Name', field:'last_name', },
    { header:'Mail', field:'email', },
    { header:'Date of Birth',field:'date_of_birth', },
    { header:'Available',field:'is_available' },
  ]

const complextFields= [
    { header:'First Name',field:'first_name', },
    { header:'Last Name', field:'last_name', },
    { header:'Mail', field:'email', },
    { header:'Date of Birth',field:'date_of_birth', },
    { header:'Available',field:'is_available' },
    { header:'Subjects', field:'subjects'}
]
const extraFields=[
    { header:'First Name', field:'first_name', headerType:'sort', },
    { 
        header:'Last Name', 
        field:'last_name', 
        styles:{
            field:{
                color:'red',
                border:'1px solid red'
            },
            header:{
                color:'#854d49'
            }
        },
    },
    { 
        header:'Mail', 
        field:'email', 
        styles:{
            field:{
                textAlign:'left'
            }
        }
    },
    { 
        header:'Date of Birth',
        field:'date_of_birth', 
        styles:{
            field:{
                textDecoration:"underline",
                fontStyle:'italic'
            }
        }
    },
    { header:'Age',field:'age', },
    { header:'Phone',field:'phone', },
    { header:'Available',field:'is_available' },
  ]

const fields =[
    {
        headerType:'checkbox',
        fieldType:'checkbox',
        width:'50px'
    },
    {
        headerType:'refresh', 
        fieldType:'refresh', 
        width:'50px'
    },
    {
        header:'Number', 
        field:'phone', 
        fieldType:'tag',
        tagProps:{
            text:'hello',
            value:'first_name',
            styles:{
                color:'#9a9dfc',
            }
        },
        width:'150px'
    },
    {
        header:'First Name',
        headerType:'search', 
        field:'first_name', 
        fieldType:'chip',
        chipProps:{
            text:'9',
            value:'grades',
            styles:{
                backgroundColor:'orange',
                color:'black'
            }
        },
        width:'150px'
    },
    {
        header:'Last Name', 
        headerType:'sort',
        field:'last_name',
        fieldType:'badge',
        width:'150px'
    },
    {
        header:'Mail', 
        headerType:'search-sort',
        field:'email', 
        width:'calc(100% - 900px)'
    },
    {
        header:'Date of Birth', 
        headerType:'tag',
        headerTag:'dd/mm/yy',
        field:'date_of_birth',
        fieldType:'date',
        dateProps:{
            format:['D','MM','YY'],
            seperator:'/',
        },
        styles:{
            field:{
                fontStyle:"italic",
            }
        },
        width:'250px'
    },
    {
        header:'Available', 
        headerType:'dropdown',
        dropdownList:[
            {label:'True', value:'true'},
            {label:'False', value:'false'},
        ],
        field:'is_available', 
        width:'100px'
    }
  ]

  const collapseMainFields =[
    {
        header:'Number', 
        field:'phone', 
        width:'150px'
    },
    {
        header:'First Name',
        headerType:'search', 
        field:'first_name', 
        width:'150px'
    },
    {
        header:'Last Name', 
        headerType:'sort',
        field:'last_name', 
        width:'150px'
    },
    {
        header:'Mail', 
        headerType:'search-sort',
        field:'email', 
        width:'calc(100% - 900px)'
    },
    {
        header:'Date of Birth', 
        headerType:'tag',
        headerTag:'(dd/mm/yy)',
        field:'date_of_birth', 
        width:'250px'
    },
    {
        header:'Available', 
        headerType:'dropdown',
        dropdownList:[
            {label:'True', value:'true'},
            {label:'False', value:'false'},
        ],
        field:'is_available', 
        width:'100px'
    },
    {
        fieldType:'collapse',
        headerType:'collapse'
    }
  ]

  const collapseSubFields =[
    { header:'Number',  field:'phone', },
    { header:'First Name', field:'first_name', },
    { header:'Last Name',  field:'last_name', },
    { header:'Mail',  field:'email', },
    { header:'Date of Birth', field:'date_of_birth', },
  ]

  //-------------------------------Nested Table Fields----------------------
  const tertiaryNestedFields =[
    { header:'Number', field:'phone', },
    { header:'First Name',field:'first_name', },
    { header:'Last Name', field:'last_name', },
    { header:'Mail', field:'email', },
    { header:'Subjects',field:'subjects', },
  ]

  const secondaryNestedFields =[
    {header:'Number',  field:'phone',     },
    {header:'First Name', field:'first_name', },
    {header:'Last Name',  field:'last_name', },
    {header:'Result', field:tertiaryNestedFields, },
  ]
  const primaryNestedFields =[
    { header:'Number',  field:'phone' },
    { header:'First Name', field:'first_name'},
    { header:secondaryNestedFields, },
    { header:secondaryNestedFields, },
    { header:'First Name', field:secondaryNestedFields, },
  ]