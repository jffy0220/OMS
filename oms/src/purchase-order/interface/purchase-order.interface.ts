export interface PurchaseOrder {
    id: number;
    po_number: string;
    date_created: Date;
    employee_id: number;
    supplier_id: number;
    shipping_address: string;
    receiving_address: string;
    date_expected: Date;
    date_delivered: Date;
    date_received: Date;
    receiver_id: number;
    number_items: number;
    item_value: number;
    shipping_cost: number;
    taxes: number;
    total_value: number;
}