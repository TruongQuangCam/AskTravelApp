import { searchTours } from "../utils/searchTours";

describe("SearchTour", () => {
  it("trả về toàn bộ tour khi từ khóa rỗng", () => {
    const result = searchTours("");
    expect(result.length).toBeGreaterThan(0);
  });

  it("tìm đúng tour theo tên", () => {
    const result = searchTours("Trương Gia Giới");
    expect(result.length).toBe(1);
    expect(result[0].title).toBe("Trương Gia Giới - Phượng Hoàng Cổ Trấn");
  });

  it("tìm đúng tour theo địa điểm", () => {
    const result = searchTours("Trung Quốc");
    expect(result.length).toBeGreaterThan(0);
    expect(result[0].location).toBe("Trung Quốc");
  });

  it("không phân biệt chữ hoa chữ thường", () => {
    const result = searchTours("trung quốc");
    expect(result.length).toBeGreaterThan(0);
    expect(result[0].location).toBe("Trung Quốc");
  });

  it("trả về danh sách rỗng khi không tìm thấy tour", () => {
    const result = searchTours("Sao Hỏa");
    expect(result.length).toBe(0);
  });
});