export interface Return {
    id: number;
    date_created: Date;
    employee_id: number;
    customer_id: number;
    item_id: number;
    returned_serial_number: string;
    date_returned: Date;
    return_type_id: number;
    process_procedure_id: number;
    customer_notes: string;
    employee_notes: string;
    order_id: number;
}