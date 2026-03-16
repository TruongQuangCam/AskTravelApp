export function validateBooking(
  name: string,
  date: string,
  people: number
) {
  if (!name.trim()) {
    return { success: false, message: "Thiếu tên khách hàng" };
  }

  if (!date.trim()) {
    return { success: false, message: "Thiếu ngày khởi hành" };
  }

  if (people <= 0) {
    return { success: false, message: "Số người không hợp lệ" };
  }

  return { success: true, message: "Đặt tour thành công" };
}