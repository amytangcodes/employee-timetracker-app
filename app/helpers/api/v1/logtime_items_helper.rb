module Api::V1::LogtimeItemsHelper
  def format_date(logtime_date, format="%d/%m/%Y", blank_message="&nbsp;")
    logtime.blank? ? blank_message : logtime.strftime(format)
  end

  def format_time(logtime, format="%k:%M", blank_message="&nbsp;")
    logtime.blank? ? blank_message : logtime.strftime(format)
  end

  def calculate_break_duration(start_time, end_time)
    seconds = ((end_time - start_time) * 24 * 60 * 60).to_i
  end

  def calculate_total_duration(break_duration, clock_in, clock_out, blank_message="&nbsp;")
    logged_seconds = ((clock_out - clock_in) * 24 * 60 * 60).to_i
    total_duration = logged_seconds - break_duration
    clock_in.blank? || clock_out.blank? ? blank_message : total_duration
  end
end