export class CreatePurchaseOrderLineItemDto {
    id: number;
    item_id: number;
    serial_number: string;
    date_shipped: Date;
    date_expected: Date;
    date_received: Date;
    item_condition: string;
}