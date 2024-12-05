import * as Yup from "yup";

const validation = Yup.object({
  email: Yup.string()
    .email("Địa chỉ email không đúng định dạng. Hãy chắc chắn rằng địa chỉ email chứa '@' và tên miền hợp lệ.")
    .required("Bạn chưa nhập địa chỉ email")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Email không được chứa ký tự đặc biệt không hợp lệ"
    )
    .max(254, "Địa chỉ email không được vượt quá 254 ký tự"), // Giới hạn độ dài email theo tiêu chuẩn
  password: Yup.string()
    .min(10, "Mật khẩu phải chứa ít nhất 10 ký tự") // Tăng độ dài mật khẩu tối thiểu
    .max(128, "Mật khẩu không được vượt quá 128 ký tự") // Giới hạn độ dài tối đa
    .required("Bạn chưa nhập mật khẩu")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
      "Mật khẩu phải bao gồm ít nhất một chữ hoa, một chữ thường, một chữ số và một ký tự đặc biệt"
    ), // Ràng buộc độ phức tạp của mật khẩu
});

export default validation;
  