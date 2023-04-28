
import axios from 'axios';

export function getData(){

	return async function(dispatch){
 let countries=await axios('http://localhost:3001/countries');
       dispatch({type:'RECIVE_DATA', payload:countries.data})  
    }
};

export function login(){
      return{type:"LOGIN"}};

export function logout(){
      return{type:"LOGOUT"}};

export function setDataFilter(value){
      return{type:"SET_DATA_FILTER", payload:value}};

export function setPageNumber(value){
      return{type:"SET_PAGE", payload:value}};

export function a_to_z(){
      return{type:'A_Z'}};

export function z_to_a(){
      return{type:'Z_A'}};