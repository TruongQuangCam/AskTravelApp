import React from "react";
import { render, fireEvent, act } from "@testing-library/react-native";
import TourDetailScreen from "../screens/tours/TourDetailScreen";
import PaymentScreen from "../screens/tours/PaymentScreen";

const mockGoBack = jest.fn();
const mockNavigate = jest.fn();

let mockRouteParams: any = {};

const mockTour = {
  id: "1",
  title: "Thái Lan Bangkok - Pattaya",
  location: "Thái Lan",
  duration: "5N4Đ",
  transport: "Máy bay + xe ô tô",
  price: 6990000,
  image: "https://picsum.photos/seed/tour1/600/400",
  description: "Tour trải nghiệm Thái Lan hấp dẫn.",
};

jest.mock("@react-navigation/native", () => ({
  useNavigation: () => ({
    goBack: mockGoBack,
    navigate: mockNavigate,
  }),
  useRoute: () => ({
    params: mockRouteParams,
  }),
}));

describe("Navigation Test", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockRouteParams = { tour: mockTour };
  });

  describe("TourDetailScreen", () => {
    it("đi tới màn Booking khi bấm nút Đặt tour", () => {
      const { getByText } = render(<TourDetailScreen />);

      fireEvent.press(getByText("Đặt tour"));

      expect(mockNavigate).toHaveBeenCalledWith("Booking", {
        tour: mockTour,
      });
    });

    it("quay lại danh sách tour khi bấm nút Trở về danh sách tour", () => {
      const { getByText } = render(<TourDetailScreen />);

      fireEvent.press(getByText("Trở về danh sách tour"));

      expect(mockGoBack).toHaveBeenCalledTimes(1);
    });
  });

  describe("PaymentScreen", () => {
    const paymentProps = {
      navigation: {
        goBack: jest.fn(),
        navigate: jest.fn(),
      },
      route: {
        params: {
          tour: mockTour,
          customerName: "John Henry",
          departureDate: "25/3/2026",
          peopleCount: "2",
        },
      },
    };

    beforeEach(() => {
      jest.useFakeTimers();
      paymentProps.navigation.goBack.mockClear();
      paymentProps.navigation.navigate.mockClear();
    });

    afterEach(() => {
      jest.runOnlyPendingTimers();
      jest.useRealTimers();
    });

    it("quay lại màn Booking khi bấm nút Quay lại chỉnh thông tin", () => {
      const { getByText } = render(<PaymentScreen {...paymentProps} />);

      fireEvent.press(getByText("Quay lại chỉnh thông tin"));

      expect(paymentProps.navigation.goBack).toHaveBeenCalledTimes(1);
    });

    it("đi tới màn BookingSuccess khi bấm nút Xác nhận thanh toán", () => {
      const { getByText } = render(<PaymentScreen {...paymentProps} />);

      fireEvent.press(getByText("Xác nhận thanh toán"));

      act(() => {
        jest.runAllTimers();
      });

      expect(paymentProps.navigation.navigate).toHaveBeenCalledWith(
        "BookingSuccess",
        {
          tour: mockTour,
          customerName: "John Henry",
          departureDate: "25/3/2026",
          peopleCount: 2,
          paymentMethod: "Chuyển khoản ngân hàng",
          totalPrice: "13.980.000 đ",
        }
      );
    });
  });
});