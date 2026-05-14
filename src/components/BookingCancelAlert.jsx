'use client'
import { TrashBin } from '@gravity-ui/icons';
import { AlertDialog, Button } from '@heroui/react';
import React from 'react';

const BookingCancelAlert = ({ bookingId }) => {

    const handleCancelBooking = async () => {

        const res = await fetch(`http://localhost:5000/booking/${bookingId}`, {
            method: "DELETE",
            headers: {
                "content-type": "application/json",
            }
        })

        const data = await res.json();
        // console.log(data);

        window.location.reload();
    };

    return (
        <div>
            <AlertDialog>

                <Button
                    className={" rounded-none border-red-500 text-red-500"}
                    variant="outline"
                >
                    <TrashBin /> Cancel
                </Button>

                <AlertDialog.Backdrop>
                    <AlertDialog.Container>
                        <AlertDialog.Dialog className="sm:max-w-100">
                            <AlertDialog.CloseTrigger />
                            <AlertDialog.Header>
                                <AlertDialog.Icon status="danger" />
                                <AlertDialog.Heading>
                                    Cancel booking permanently?
                                </AlertDialog.Heading>
                            </AlertDialog.Header>
                            <AlertDialog.Body>
                            </AlertDialog.Body>
                            <AlertDialog.Footer>
                                <Button slot="close" variant="tertiary">
                                    Go Back
                                </Button>
                                <Button onClick={handleCancelBooking} slot="close" variant="danger">
                                    Cancellation Confirm
                                </Button>
                            </AlertDialog.Footer>
                        </AlertDialog.Dialog>
                    </AlertDialog.Container>
                </AlertDialog.Backdrop>
            </AlertDialog>
        </div>
    );
};

export default BookingCancelAlert;