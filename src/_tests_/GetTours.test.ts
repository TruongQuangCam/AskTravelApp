import { getTours } from "../utils/getTours";

describe("GetTours", () => {
  it("trả về danh sách tour", () => {
    const result = getTours();
    expect(result.length).toBeGreaterThan(0);
  });

  it("tour đầu tiên có đầy đủ thông tin cơ bản", () => {
    const result = getTours();

    expect(result[0].title).toBe("Trương Gia Giới - Phượng Hoàng Cổ Trấn");
    expect(result[0].location).toBe("Trung Quốc");
    expect(result[0].duration).toBe("5N4Đ");
    expect(result[0].price).toBe(14690000);
  });
});