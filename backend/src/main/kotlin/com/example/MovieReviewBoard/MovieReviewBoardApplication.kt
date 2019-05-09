package com.example.MovieReviewBoard

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.boot.web.servlet.FilterRegistrationBean
import org.springframework.context.annotation.Bean
import org.springframework.core.Ordered
import org.springframework.web.cors.CorsConfiguration
import org.springframework.web.cors.UrlBasedCorsConfigurationSource
import org.springframework.web.filter.CorsFilter
import java.util.*
import javax.servlet.Filter

@SpringBootApplication
class MovieReviewBoardApplication


fun main(args: Array<String>) {
    runApplication<MovieReviewBoardApplication>(*args)
}
