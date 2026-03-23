import { validateBooking } from "../utils/validateBooking";

describe("BookingTour", () => {

  test("đặt tour thành công khi dữ liệu hợp lệ", () => {
    const result = validateBooking("Nguyen Van A", "2026-04-01", 2);
    expect(result.success).toBe(true);
  });

  test("báo lỗi khi thiếu tên khách hàng", () => {
    const result = validateBooking("", "2026-04-01", 2);
    expect(result.success).toBe(false);
  });

  test("báo lỗi khi thiếu ngày khởi hành", () => {
    const result = validateBooking("Nguyen Van A", "", 2);
    expect(result.success).toBe(false);
  });

  test("báo lỗi khi số người không hợp lệ", () => {
    const result = validateBooking("Nguyen Van A", "2026-04-01", 0);
    expect(result.success).toBe(false);
  });

});