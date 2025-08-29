import { first_emp } from './first_dark_slice'
import {configureStore} from '@reduxjs/toolkit'

export const MyStore = configureStore({
    reducer:{
        the_emp:first_emp,
    }
})